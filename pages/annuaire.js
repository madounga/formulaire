import { Formik, useFormik } from "formik";
import Head from "next/head";
import Link from "next/link";

const Annuaire = () => {
  return (
    <div className="row">
      <div className="col-md-8 mx-auto my-4">
        <Link href="/">
          <a className="btn btn-primary">Ajouter une entrée</a>
        </Link>
      </div>
      <div className="col-md-8 mx-auto">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Prénom</th>
              <th scope="col">Adresse</th>
              <th scope="col">Code Postal</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Zemmour</td>
              <td>Eric</td>
              <td>23 Rue Jacque coeur</td>
              <td>93749</td>
              <td>+336729922</td>
              <td>marc-otto@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Chauffroy</td>
              <td>Jehanne</td>
              <td>33 Rue Thionville</td>
              <td>57349</td>
              <td>+336778873</td>
              <td>matthieujean@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>LePEN</td>
              <td>Marine</td>
              <td>33 Rue Thionville</td>
              <td>57349</td>
              <td>+336778873</td>
              <td>marielepen@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Macron</td>
              <td>Emmanuel</td>
              <td>92 Rue liona</td>
              <td>34911</td>
              <td>+33878273</td>
              <td>mama-leo@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Annuaire;
