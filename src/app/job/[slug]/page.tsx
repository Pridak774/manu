import { notFound } from "next/navigation";

const jobs = {
  curier: {
    title: "Curier",
    description:
      "Ești rapid, responsabil și vrei să faci parte dintr-o echipă tech? Alătură-te ca și curier și livrează zâmbete în oraș! Program flexibil, bonusuri de performanță și suport modern.",
    details: [
      "Livrări rapide în oraș",
      "Program flexibil (full/part time)",
      "Bonusuri de performanță",
      "Training și suport tech",
    ],
  },
  dispatcher: {
    title: "Dispatcher",
    description:
      "Coordonezi comenzile, comunici cu clienții și susții echipa de curieri. Totul remote, într-un mediu digital modern și prietenos.",
    details: [
      "Coordonare comenzi și rutare",
      "Comunicare cu clienții și curierii",
      "Mediu digital, remote",
      "Training și suport continuu",
    ],
  },
  manager: {
    title: "Manager zonal",
    description:
      "Gestionezi echipa, analizezi performanța și dezvolți operațiunile locale. Rol de leadership cu impact real și creștere profesională.",
    details: [
      "Coordonare echipă locală",
      "Analiză performanță și raportare",
      "Dezvoltare operațională",
      "Salariu competitiv și bonusuri",
    ],
  },
};

function Page({ params }: { params: { slug: string } }) {
  const job = jobs[params.slug as keyof typeof jobs];
  if (!job) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-xl w-full bg-gray-900 rounded-xl shadow-xl p-8 mt-24 mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-400">{job.title}</h1>
        <p className="text-lg text-gray-300 mb-6">{job.description}</p>
        <ul className="list-disc pl-6 space-y-1">
          {job.details.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-400 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {benefit}
            </li>
          ))}
        </ul>
        <a
          href="/page#aplica"
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 transition rounded-full px-8 py-3 font-semibold text-lg shadow-lg"
        >
          Aplică pentru acest job
        </a>
      </div>
    </div>
  );
}

Page.displayName = "JobPage";
export default Page;
