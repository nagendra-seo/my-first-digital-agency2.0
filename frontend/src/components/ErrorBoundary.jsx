import { Component } from "react";

/** Last-resort safety net. Without this, any uncaught error anywhere in
 *  the component tree unmounts the ENTIRE app, leaving a blank page with
 *  no indication anything went wrong. This never replaces fixing the
 *  underlying bug — it just means a bug shows a message instead of a
 *  blank white screen. */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FBFAF6", padding: "24px", textAlign: "center" }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: "18px", color: "#1A1612", marginBottom: "8px" }}>Something went wrong loading this page.</p>
            <p style={{ color: "#5C5245", fontSize: "14px", marginBottom: "16px" }}>Try refreshing — if it keeps happening, check the browser console for details.</p>
            <button
              onClick={() => window.location.reload()}
              style={{ background: "#F5C319", color: "#1A1612", fontWeight: 700, padding: "10px 20px", borderRadius: "9999px", border: "none", cursor: "pointer" }}
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
