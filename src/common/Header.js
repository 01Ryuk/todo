import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PaystackButton } from "react-paystack";

const Header = () => {
  const [tokenAvailable, setTokenAvailable] = useState(false);
  const publicKey = "pk_test_82c358292163c0db4ad25e1f48a59c432dc59520";
  const [email, setEmail] = useState("email@egg.com");


  useEffect(() => {
    if (localStorage.getItem("token")) {
      setTokenAvailable(true);
    }
  }, []);

  async function logout() {
    localStorage.clear();
    setTokenAvailable(false);
  }

  const config = {
    reference: "KH-S-" + new Date().getTime(),
    amount: 4000000,
    metadata: {
      cname: "Ukairo MM40",
      plan: "1",
      remarks: "Payment for Individual Account, Silver Plan.",
    },
    email: email,
    publicKey: publicKey,
  };
  const gconfig = {
    
  };
  const componentProps = {
    ...config,
    text: "Pay now",
    onSuccess: (reference) => showSuccess(),
    onClose: "",
  };

  const showSuccess = () => {
    alert("Payment successful");
  };

  return (
    <>
      <nav
        class="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div class="container-fluid">
          <Link className="navbar-brand" to="#">
            Expand at md
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {(() => {
                if (tokenAvailable === true) {
                  return (
                    <>
                      <li class="nav-item">
                        <Link className="nav-link" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/create">
                          Create Todo
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/weather">
                          Check Weather
                        </Link>
                      </li>
                      <li class="nav-item">
                        <PaystackButton className="btn btn-dark "
                        {...componentProps}
                        />
                      </li>
                      <li class="nav-item">
                        <span
                          onClick={logout}
                          className="nav-link cursor-pointer"
                        >
                          Logout
                        </span>
                      </li>
                    </>
                  );
                } else {
                  return (
                    <>
                      <li class="nav-item">
                        <Link className="nav-link" to="/signup">
                          Sign up
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link className="nav-link" to="/login">
                          Log in
                        </Link>
                      </li>
                    </>
                  );
                }
              })()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
