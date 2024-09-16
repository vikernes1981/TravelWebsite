const Hero = () => {
  return (
    <div>
      <ul className="flex mx-10">
        <li className="py-40">
          <h6 className="text-l text-amber-600 font-bold">
            BEST DESTINATIONS AROUND THE WORLD
          </h6>
          <h1 className="text-6xl font-bold">
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it. <br />
            Preferred to sportsmen it engrossed listening. Park gate <br />
            sell they west hard for the.
          </p>
          <ul className="flex gap-5 pt-5">
            <li>
              <button className="btn bg-orange-300 ">Find out more</button>
            </li>
            <li>
              <button className="btn ">Play Demo</button>
            </li>
          </ul>
        </li>
        <li>
          <img src="/src/Flight.png" alt="Flight" />
        </li>
      </ul>
    </div>
  );
};

export default Hero;
