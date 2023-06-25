import "./Job";
import Job from "./Job";

const Jobs = (props) => {
  console.log("Jobs", props);
  return (
    <main className="container">
      <Job
        title="Full Times Sales Associate - Sydney Boutique"
        className="red"
        contratType="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        title="Agent de Sécurité - Pantin"
        className="green"
        contratType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        title="Responsable d'Atelier (H/F)"
        className="yellow"
        contratType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        title="Chef de Projets"
        className="blue"
        contratType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        title="Développeur React.js"
        className="salmon"
        contratType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        title="Sales Associate Stockholm"
        className="red"
        contratType="CDI"
        country="Suède"
        city="Stockholm"
      />
      <Job
        title="Vendeur/se - Crans Montana"
        className="green"
        contratType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />
      <Job
        title="CRM & Data Quality Analyst"
        className="yellow"
        contratType="CDI"
        country="USA"
        city="New York"
      />
      <Job
        title="Infirmier (H/F)"
        className="blue"
        contratType="CDI"
        country="France"
        city="Pantin"
      />
    </main>
  );
};

export default Jobs;
