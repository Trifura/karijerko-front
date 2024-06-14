import '../../index.css';
import Navbar from '../../core/components/Navbar';
import Footer from '../../core/components/Footer';
import NavbarPublic from "../../core/components/NavbarPublic.jsx";

const App = () => {
  const people = [
    {
        name: 'Ivan Mikodanić',
        bio: 'Posvećeni 20-godišnji softverski inženjer s čvrstim temeljem u frontend i backend razvoju. S 2 godine praktičnog iskustva u izradi responzivnih i korisnički prijateljskih web sučelja i 2 godine stručnosti u izradi učinkovitih aplikacija na strani poslužitelja.',
        image: 'https://media.licdn.com/dms/image/D4D03AQGiiaGJjB31QQ/profile-displayphoto-shrink_200_200/0/1666043344530?e=1723680000&v=beta&t=UI-xBZq6-qZuybpvE8GjmOY7NNZWZ6iAl4Els8b3acA',
        link: 'https://www.linkedin.com/in/ivan-mikodanic/'
      },
    {
      name: 'Benjamin Sabo',
      bio: '20 godišnji softverski inženjer s čvrstim temeljem u frontend razvoju. Iako nemam formalnog radnog iskustva u front-endu, samostalno sam radio na izradi responzivnih i korisnički prijateljskih web sučelja ( kao npr. Karijerko :D ).',
      image: 'https://media.licdn.com/dms/image/D4D03AQHqe3q7qQA3XQ/profile-displayphoto-shrink_100_100/0/1714681109181?e=1723680000&v=beta&t=fIsu0Tjzn61rBv18QyDbdLdlsjUb8rdf5ZhjE_WQNuI',
      link: 'https://www.linkedin.com/in/bsabo44/'
    }
  ];

  const Person = ({ name, bio, image, link }) => {
    return (
      <div className="p-4 m-4 border rounded-lg shadow-lg max-w-xs text-center bg-white flex flex-col items-center">
        <img className="w-24 h-24 mx-auto rounded-full" src={image} alt={`${name}'s picture`} />
        <h2 className="mt-4 text-xl font-semibold">{name}</h2>
        <p className="mt-2 text-gray-600">{bio}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jBFzDC_JAg8STef0z52TWRpN9fLCOsPCJw&s" alt="LinkedIn" className="w-8 h-8 mt-4" />
        </a>
      </div>
    );
  };

  return (
    <>
      <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-8">O nama</h1>
        <div className="flex flex-wrap justify-center">
          {people.map((person, index) => (
            <Person key={index} {...person} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default App;
