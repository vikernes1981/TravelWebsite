const Services = () => {
  return (
    <div>
      <h6 className="text-l text-center">CATEGORY</h6>
      <h1 className="text-3xl text-center font-extrabold ">
        We Offer Best Services
      </h1>
      <div>
        <ul className="flex flex-wrap justify-center gap-5">
          <li>
            <div className="card bg-base-100 w-64 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="/src/satelite.png"
                  alt="Satellite"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Calculated Weather</h2>
                <p>
                  Built Wicket longer <br /> admire do barton <br />
                  vanity itself do in it.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-base-100 w-64 shadow-xl">
              <figure className="px-10 pt-10 h-28">
                <img
                  src="/src/plane.png"
                  alt="Satellite"
                  className="rounded-xl object-cover "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Best Flights</h2>
                <p>
                  Engrossed listening. <br />
                  Park gate sell they <br />
                  west hard for the.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-base-100 w-64 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="/src/Mikrofon.png"
                  alt="Satellite"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Local Events</h2>
                <p>
                  Barton vanity itself do <br />
                  in it. Preferd to men it <br /> engrossed listening.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card bg-base-100 w-64 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="/src/Settings.png"
                  alt="Satellite"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Customization</h2>
                <p>
                  We deliver outsourced <br />
                  aviation services for <br /> military customers
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
