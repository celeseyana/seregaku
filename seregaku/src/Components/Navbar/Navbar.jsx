import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav class="navbar is-justify-content-space-between is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <span class="ml-4 mt-3">セレ学</span>
                </div>
                <div class="is-flex is-justify-content-space-evenly mt-3">
                    <span class="ml-2 mr-2 nav-item">Home</span>
                    <span class="ml-2 mr-2 nav-item">Dictionary</span>
                    <span class="ml-2 mr-2 nav-item">Grammar</span>
                    <span class="ml-2 mr-2 nav-item">Progress Tracker</span>
                </div>
                <div class="mt-3">
                    <button class="login-button mr-4"> {/* this is custom */}
                        Login
                    </button>
                </div>
            </nav>
        </>
    )
}