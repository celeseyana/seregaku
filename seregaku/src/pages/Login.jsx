export default function Login() {
    return (
        <section className="hero is-fullheight is-flex is-justify-content-center is-align-items-center">
            <div className="box" style={{ width: '400px' }}>
                <h1 className="title is-4 has-text-centered mb-5">Login</h1>

                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>

                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div className="field">
                    <p className="control">
                        <button className="button is-success is-fullwidth">
                            Login
                        </button>
                    </p>
                </div>

                <div className="has-text-centered mt-4">
                    <p className="control mt-5">Don't have an account?</p>
                    <div className="control mt-1">
                        <button className="button is-info is-fullwidth">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
