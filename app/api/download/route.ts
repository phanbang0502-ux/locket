import { NextRequest, NextResponse } from "next/server";

const MOBILECONFIG_XML = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>PayloadContent</key>
	<array>
		<dict>
			<key>PayloadCertificateFileName</key>
			<string>GoldBangCA.cer</string>
			<key>PayloadContent</key>
			<data>
			MIIDUjCCAjqgAwIBAgIUJ5z668dYqo50VWt1dsMraOvGsZgwDQYJ
			KoZIhvcNAQELBQAwQTELMAkGA1UEBhMCVk4xGTAXBgNVBAoMEEdv
			bGQgTVBob25nIFRlYW0xFzAVBgNVBAMMDkdvbGQgTVBob25nIENB
			MB4XDTI2MTAyOTEwMTI1MFoXDTM2MTAyNzEwMTI1MFowQTELMAkG
			A1UEBhMCVk4xGTAXBgNVBAoMEEdvbGQgTVBob25nIFRlYW0xFzAV
			BgNVBAMMDkdvbGQgTVBob25nIENBMIIBIjANBgkqhkiG9w0BAQEF
			AAOCAQ8AMIIBCgKCAQEAsArzr1LJE99uVRclUcLA+aQGWnQWfsFZ
			kSzckKCze8HO2bA22YaxXZIt2N+Z89c8mBnPtKOpVL3udRCd30DC
			Eb+SB8yLDEShKLNZgwisy/lAkeJ7jkdUJNtsNWOF/CewTh8xC1vY
			9YHWva3TVgM9W5JGcN3qNQxSdqdz3VnV3TnxINPMAmY/o6OWjqsu
			ZJbJ8PL8rGCvQuqYoSzdX0pa7ExJITXARekxvbqUu5CdBntDhHGU
			Yd75dkwGmkEsc4vGARCQ8gLi0O3VMWRKeSagVqWqUjrCeiBXSUaQ
			yTl01qHWs9HvpbY4XuIM0kSPb5q1MP7NNttx53aop0vO5za8hQID
			AQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIB
			hjAdBgNVHQ4EFgQU8cq51PmcCEQ6GsO1pjRq5uUSbWcwDQYJKoZI
			hvcNAQELBQADggEBAKpCvZ6zrOxHPKWC+TMWQMTBLG0mc75bx844
			4J7TQWXPsQYn8f/TcONlVtHtP7D51muG3mnbVwncweXXmWOB2q3i
			K/iVfzmDh/5c9e4Sr2/Mo4cis0wmlSxXN471DTzlhG7qFNYlELpV
			KRru0om8YGGkFd+jSZztJisDxenfAuoc55m4w2LhkuY/BB6LKkCq
			byQdJLs/6QXZ6PeK+fHd6sWvH6vWAusbo8GXKAzpqzpE5bdelzuO
			bEDZPWn7fP3gzAnBI+lHC8UWXVaNXNvaOuhKbxs7pVPCPR2fP0br
			bLFfx/eJ/R0oh/2w/kndpJKXAV1v+vn/JXZuq/KwGTv5/2E=
			</data>
			<key>PayloadDisplayName</key>
			<string>Locket Gold Bang CA</string>
			<key>PayloadIdentifier</key>
			<string>com.locketgoldbang.ca</string>
			<key>PayloadType</key>
			<string>com.apple.security.root</string>
			<key>PayloadUUID</key>
			<string>B2E8D93C-45AF-492B-A983-6D7E9F8A1B23</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
		<dict>
			<key>DNSSettings</key>
			<dict>
				<key>DNSProtocol</key>
				<string>HTTPS</string>
				<key>ServerAddresses</key>
				<array>
					<string>160.22.107.180</string>
				</array>
				<key>ServerURL</key>
				<string>https://160.22.107.180/dns-query</string>
				<key>SupplementalMatchDomains</key>
				<array>
					<string>api.revenuecat.com</string>
					<string>*.revenuecat.com</string>
					<string>revenuecat.com</string>
					<string>firebaseremoteconfig.googleapis.com</string>
					<string>*.firebaseremoteconfig.googleapis.com</string>
					<string>firebaseremoteconfigrealtime.googleapis.com</string>
					<string>*.firebaseremoteconfigrealtime.googleapis.com</string>
					<string>firebaselogging.googleapis.com</string>
					<string>*.firebaselogging.googleapis.com</string>
					<string>api.locketcamera.com</string>
					<string>*.locketcamera.com</string>
					<string>us-central1-locket-4252a.cloudfunctions.net</string>
				</array>
			</dict>
			<key>PayloadDisplayName</key>
			<string>Locket Gold Bang DNS</string>
			<key>PayloadIdentifier</key>
			<string>com.locketgoldbang.dns</string>
			<key>PayloadType</key>
			<string>com.apple.dnsSettings.managed</string>
			<key>PayloadUUID</key>
			<string>C3F9EA4D-56BA-4A3C-BA94-7E8F0A9B2C34</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
		</dict>
	</array>
	<key>PayloadDescription</key>
	<string>Kích hoạt Locket Gold Bang (Hạn đến 09/09/9999).</string>
	<key>PayloadDisplayName</key>
	<string>Locket Gold Bang</string>
	<key>PayloadIdentifier</key>
	<string>com.locketgoldbang.config</string>
	<key>PayloadOrganization</key>
	<string>Locket Gold Bang</string>
	<key>PayloadRemovalDisallowed</key>
	<false/>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadUUID</key>
	<string>A1F7C82B-349E-481A-9872-5C6D8E7F0A12</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
</dict>
</plist>`;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "";

  if (!token) return new NextResponse("Thiếu token xác thực.", { status: 403 });

  const checkRes = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/token:${token}`, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` }
  });
  const checkData = await checkRes.json();

  if (!checkData.result) {
    return new NextResponse("Link tải đã hết hạn hoặc đã được sử dụng!", { status: 410 });
  }

  const tokenMeta = JSON.parse(checkData.result);

  if (tokenMeta.ip !== ip) {
    return new NextResponse("Địa chỉ IP không khớp với thiết bị được cấp phép!", { status: 403 });
  }

  await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/del/token:${token}`, {
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}` },
    method: "POST"
  });

  return new NextResponse(MOBILECONFIG_XML, {
    headers: {
      "Content-Type": "application/x-apple-aspen-config; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Locket_Gold_Bang.mobileconfig"'
    }
  });
}
