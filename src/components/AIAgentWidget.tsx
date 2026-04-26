import { useEffect, useRef } from "react";

const IFRAME_SRC =
  "https://voice-agent-swart.vercel.app/?config=eyJvd25lcklkIjoiY1kzOE9mSXhOc1hJSnhsVXh0S2hzWlBQN25WMiIsImZpbGVVcGxvYWRDb25maWciOnsiY2xvdWRpbmFyeUNsb3VkTmFtZSI6ImRpa2pnMDZtYyIsImNsb3VkaW5hcnlVcGxvYWRQcmVzZXQiOiJQU1NEQy1UZXN0In0sImF2YXRhcjFVcmwiOiJodHRwczovL2ltYWdlMnVybC5jb20vcjIvZGVmYXVsdC9pbWFnZXMvMTc3MzY5NDUxMTcxOC1jM2E5YTc3Ni05NzFiLTRhMDgtODAxYi04YmI5NjZjOGY3OGIuanBnIiwibG9nb1VybCI6Imh0dHBzOi8vd3d3LmltYWdlMnVybC5jb20vcjIvZGVmYXVsdC9pbWFnZXMvMTc3NzE0NjA5NTkzNC05ZWI4ZWI3Yy01OWI3LTQwNjktOGFmOS1iOWRiMDhhMjM5NWUucG5nIiwiY2FsbG91dE1lc3NhZ2UiOiJHb3QgcXVlc3Rpb25zPyBOWVNDIEFJIEFnZW50IGlzIGhlcmUgdG8gaGVscCIsInRoZW1lIjoibGlnaHQiLCJpbml0aWFsR3JlZXRpbmciOiJIZWxsbyEg8J-RiyBJIGFtIE5BWUEsIHlvdXIgTllTQyBhc3Npc3RhbnQuIEhvdyBjYW4gSSBoZWxwIHlvdSB0b2RheT8iLCJ2b2ljZSI6IkVuY2VsYWR1cyIsImNoYXRLbm93bGVkZ2VCYXNlIjoi8J-Hs_Cfh6wgTllTQyBNQVNURVIgS05PV0xFREdFIEJBU0UgKEFJLU9QVElNSVpFRCDigKIgQ09OU09MSURBVEVEIEVESVRJT04gMjAyNilcblBSSU1BUlkgU09VUkNFU1xucG9ydGFsLm55c2Mub3JnLm5nXG53d3cubnlzYy5nb3Yubmdcbm55c2Nwb3J0YWwubmciLCJrbm93bGVkZ2VCYXNlIjoi8J-Hs_Cfh6wgTllTQyBNQVNURVIgS05PV0xFREdFIEJBU0UgKEFJLU9QVElNSVpFRCDigKIgQ09OU09MSURBVEVEIEVESVRJT04gMjAyNikiLCJhY2NlbnRDb2xvciI6ImVtZXJhbGQiLCJtYXhMb2RnZUNhcGFjaXR5Ijo1MiwiZW1haWxDb25maWciOnsiZm9ybXNwcmVlRW5kcG9pbnQiOiJodHRwczovL2Zvcm1zcHJlZS5pby9mL3hqZ2pkdndxIn0sImF2YXRhcjJVcmwiOiIiLCJpbml0aWFsR3JlZXRpbmdUZXh0IjoiSGVsbG8hIPCfkYsgSSBhbSBOQVlBLCB5b3VyIE5ZU0MgYXNzaXN0YW50LiBIb3cgY2FuIEkgaGVscCB5b3UgdG9kYXk_IiwiaWQiOiJjdXN0b20tMTc3Njc3ODE2MTY5OSIsIm5hbWUiOiJOWVNDIEFJIEFnZW50In0";

export function AIAgentWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    const container = containerRef.current;
    if (!iframe || !container) return;

    function handleMessage(event: MessageEvent) {
      if (!iframe || !container) return;
      if (event.source !== iframe.contentWindow) return;
      const data = event.data as
        | { type?: string; isOpen?: boolean; width?: number; height?: number }
        | undefined;
      if (!data || data.type !== "agent-widget-resize") return;

      const isMobile = window.innerWidth < 768;
      const isOpen = !!data.isOpen;

      if (isMobile && isOpen) {
        container.style.bottom = "0";
        container.style.right = "0";
        container.style.left = "0";
        container.style.top = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.borderRadius = "0";
        iframe.style.boxShadow = "none";
      } else {
        container.style.bottom = "20px";
        container.style.right = "20px";
        container.style.left = "auto";
        container.style.top = "auto";
        iframe.style.width = (data.width ?? 80) + "px";
        iframe.style.height = (data.height ?? 80) + "px";
        iframe.style.borderRadius = isOpen ? "24px" : "20px";
        iframe.style.boxShadow = isOpen ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "none";
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        pointerEvents: "none",
      }}
    >
      <iframe
        ref={iframeRef}
        src={IFRAME_SRC}
        title="NYSC AI Agent"
        allow="microphone"
        scrolling="no"
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
          width: "80px",
          height: "80px",
          transition:
            "width 0.3s cubic-bezier(0.19, 1, 0.22, 1), height 0.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s ease, transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
          overflow: "hidden",
          pointerEvents: "auto",
          willChange: "width, height",
          borderRadius: "20px",
          boxShadow: "none",
        }}
      />
    </div>
  );
}
