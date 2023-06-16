import React from "react";

const Banner = () => {
  return (
    <div>
      <section class="pb-4 position-relative">
        <div class="bg-white border rounded-5">
          <section class="p-4 text-center w-100">
            {/* <!-- Hero --> */}
            <div
              class="p-5 text-center bg-image rounded-3"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521776943084-9a3512bd6311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                height: "400px",
              }}
            >
              <div
                class="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div class="d-flex justify-content-center align-items-center h-100">
                  <div class="text-white w-75">
                    <h1 class="mb-3">Lorem ipsum dolor sit</h1>
                    <h6 class="mb-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, perspiciatis. Laborum possimus voluptatum
                      repudiandae eius!
                    </h6>
                    <a
                      class="btn btn-outline-light btn-lg"
                      href="#!"
                      role="button"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Hero --> */}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Banner;
