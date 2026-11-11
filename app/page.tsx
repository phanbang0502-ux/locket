"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<"IDLE" | "PENDING" | "APPROVED" | "DENIED">("IDLE");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function initRequest() {
      try {
        setStatus("PENDING");
        const res = await fetch("/api/request-access", { method: "POST" });
        const data = await res.json();

        if (!data.success) {
          setStatus("DENIED");
          setErrorMsg(data.message || "Không thể gửi yêu cầu");
          return;
        }

        const requestId = data.requestId;

        const interval = setInterval(async () => {
          const checkRes = await fetch(`/api/check-status?id=${requestId}`);
          const checkData = await checkRes.json();

          if (checkData.status === "APPROVED") {
            clearInterval(interval);
            setStatus("APPROVED");
            window.location.href = `/api/download?token=${checkData.downloadToken}`;
          } else if (checkData.status === "DENIED") {
            clearInterval(interval);
            setStatus("DENIED");
            setErrorMsg("Yêu cầu tải bị từ chối.");
          }
        }, 2000);
      } catch {
        setStatus("DENIED");
        setErrorMsg("Đã xảy ra lỗi kết nối.");
      }
    }

    initRequest();
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b0f19", color: "#fff", fontFamily: "sans-serif", padding: 20 }}>
      <div style={{ textAlign: "center", maxWidth: 400, background: "#161f30", padding: 30, borderRadius: 16, border: "1px solid #23304a" }}>
        <h2 style={{ fontSize: 20, marginBottom: 15 }}>Cấu Hình Locket Gold Bang</h2>

        {status === "PENDING" && (
          <div>
            <div style={{ width: 40, height: 40, border: "3px solid #3b82f6", borderTopColor: "transparent", borderRadius: "50%", margin: "20px auto", animation: "spin 1s linear infinite" }} />
            <p style={{ color: "#94a3b8", fontSize: 14 }}>Thiết bị đang gửi yêu cầu xác thực...</p>
            <p style={{ color: "#64748b", fontSize: 13, marginTop: 8 }}>Vui lòng chờ phê duyệt qua Telegram.</p>
          </div>
        )}

        {status === "APPROVED" && (
          <div>
            <p style={{ color: "#22c55e", fontWeight: "bold" }}>Đã được cấp quyền!</p>
            <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 5 }}>Hồ sơ đang tự động tải về máy...</p>
          </div>
        )}

        {status === "DENIED" && (
          <div>
            <p style={{ color: "#ef4444", fontWeight: "bold" }}>Từ chối truy cập</p>
            <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 5 }}>{errorMsg}</p>
          </div>
        )}
      </div>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
