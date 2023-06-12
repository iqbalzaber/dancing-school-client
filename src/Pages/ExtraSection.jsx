import img1 from '../assets/images/istockphoto-1192163932-612x612.jpg'
import img2 from '../assets/images/istockphoto-1192163932-612x612.jpg'
import img3 from '../assets/images/istockphoto-1192163932-612x612.jpg'
import img4 from '../assets/images/istockphoto-1192163932-612x612.jpg'
import img5 from '../assets/images/istockphoto-1192163932-612x612.jpg'
import img6 from '../assets/images/istockphoto-1192163932-612x612.jpg'
import img7 from '../assets/images/istockphoto-1192163932-612x612.jpg'
import img8 from '../assets/images/istockphoto-1192163932-612x612.jpg'
import img9 from '../assets/images/istockphoto-1192163932-612x612.jpg'





const ExtraSection = () => {
    return (
        <section className="py-16 bg-cover bg-center bg-gradient-to-r from-blue-500 to-purple-500" style={{ backgroundImage: 'url(/path-to-background-image.jpg)' }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Capturing the Art of Dance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105">
              <img src={img1} className="w-full" />
              <div className="p-4">
                <p className="text-gray-700 text-center">"Dance like no one is watching,<br /> Love like you've never been hurt,<br /> Sing like no one is listening,<br /> Live like it's heaven on earth."<br /> - William W. Purkey</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105">
              <img src={img2} alt="Dance Image" className="w-full" />
              <div className="p-4">
                <p className="text-gray-700 text-center">"Dancing is like dreaming with your feet!"<br /> - Constanze Mozart</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:scale-105">
              <img src={img3} alt="Dance Image" className="w-full" />
              <div className="p-4">
                <p className="text-gray-700 text-center">"The job of feet is walking, but their hobby is dancing."<br /> - Amit Kalantri</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ExtraSection;