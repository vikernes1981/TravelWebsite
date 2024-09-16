import blogimg from "../images/rome.jpg";
import blogimg1 from "../images/london.jpg";
import blogimg2 from "../images/europe.jpeg";

const Destinations = () => {
  return (
    <div class="container mx-auto p-4 my-8 bg-white rounded-lg">
      <div class="mt-8 text-center">
        <h1 class="text-xl ">Top Selling</h1>
        <h1 class="text-3xl font-bold">Top Destination</h1>
      </div>
      <div class="flex flex-wrap justify-center mt-8 gap-8">
        <div class="bg-white shadow-lg rounded-lg w-80">
          <img
            src={blogimg}
            alt="schlafzimmer1"
            class="w-full h-60 rounded-t-lg object-cover"
          />
          <div class="flex items-center mt-4 px-4">
            <span>10 days trip</span>

            <div class="ml-4 flex-grow">
              <h2 class="font-bold text-xl whitespace-nowrap ml-0,5">
                Rome,Italy
              </h2>
            </div>
            <span>$5,42k</span>
          </div>
          <p class="mt-4 text-sm px-4 pb-4 font-">
            Rom, die Hauptstadt Italiens, ist eine kosmopolitische Großstadt,
            die fast 3.000 Jahre Kunstgeschichte, Architektur und Kultur von
            Weltrang vorweisen kann. Antike Ruinen wie das Forum und das
            Kolosseum zeugen von der einstigen Macht des Römischen Reiches
          </p>
        </div>

        <div class="bg-white shadow-lg rounded-lg w-80">
          <img
            src={blogimg1}
            alt="wohnzimmer1"
            class="w-full h-60 rounded-t-lg object-cover"
          />
          <div class="flex items-center mt-4 px-4">
            <span>10 days trip</span>
            <div class="ml-4 flex-grow">
              <h2 class="font-bold text-xl whitespace-nowrap ml-0,5">
                London,UK
              </h2>
            </div>
            <span>$4,2k</span>
          </div>
          <p class="mt-4 text-sm px-4 pb-4">
            London, die Hauptstadt Englands und Großbritanniens, ist eine
            moderne Stadt, deren Wurzeln in die Zeit des Römischen Reiches
            zurückgehen. In ihrem Zentrum stehen die imposanten Houses of
            Parliament, der legendäre Uhrturm „Big Ben“ und Westminster Abbey,
            Krönungsstätte der britischen Monarchen.
          </p>
        </div>

        <div class="bg-white shadow-lg rounded-lg w-80">
          <img
            src={blogimg2}
            alt="schlafzimmer2"
            class="w-full h-60 rounded-t-lg object-cover"
          />
          <div class="flex items-center mt-4 px-4">
            <span>10 days trip</span>
            <div class="ml-4 flex-grow">
              <h2 class="font-bold text-xl whitespace-nowrap ml-0,5">
                Full Europe
              </h2>
            </div>
            <span>$15k</span>
          </div>
          <p class="mt-4 text-sm px-4 pb-4">
            Europa lässt sich wunderbar erfahren - im wahrsten Sinne des Wortes.
            Traumhafte Straßen führen an Küsten, durch Gebirge und durch alte
            Kulturlandschaften. Wir zeigen neun Roadtrips.
          </p>
        </div>
      </div>
      <div class="flex justify-center space-x-4 mt-8"></div>
    </div>
  );
};

export default Destinations;
