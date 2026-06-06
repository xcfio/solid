import { attachDevtoolsOverlay } from "@solid-devtools/overlay"
import { ErrorFallback } from "@/components/error-fallback"
import { FileRoutes } from "@solidjs/start/router"
import { ErrorBoundary, Suspense } from "solid-js"
import { Router } from "@solidjs/router"
import { Toaster } from "solid-sonner"
import "./app.css"

attachDevtoolsOverlay()

export default function App() {
    return (
        <Router
            root={(props) => (
                <Suspense fallback={<div class="flex items-center justify-center h-screen">Loading...</div>}>
                    <ErrorBoundary fallback={(err, reset) => <ErrorFallback error={err} reset={reset} />}>
                        <Toaster
                            theme="system"
                            position="top-right"
                            richColors
                            closeButton
                            expand
                            visibleToasts={5}
                            duration={5000}
                            gap={8}
                            offset={16}
                            swipeDirections={["top", "right"]}
                            containerAriaLabel="Notifications"
                            pauseWhenPageIsHidden
                        />
                        {props.children}
                    </ErrorBoundary>
                </Suspense>
            )}
        >
            <FileRoutes />
        </Router>
    )
}
