import { Formik, useFormik } from "formik";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <form className="flex justify-between p-2">
        <div>
          <label htmlFor="INSCRIPTION">INSCRIPTION</label>
        </div>
        <div>
          <label htmlFor="nom">nom</label>
          <input type="nom" name="nom" placeholder="votre nom" />
        </div>
        <div>
          <label htmlFor="prenom">prenom</label>
          <input type="prenom" prenom="prenom" placeholder="votre prenom" />
        </div>
        <div>
          <label htmlFor="adresse">adresse</label>
          <input type="adresse" adresse="adresse" placeholder="votre adresse" />
        </div>
        <label htmlFor="code postal">code postal</label>
        <input
          type="code postal"
          code
          postal="code postal"
          placeholder="votre code postal"
        />

        <div>
          <label htmlFor="numero de telephone">numero de telephone</label>
          <input
            type="numero de telephone"
            numero
            de
            telephone="numero de telephone"
            placeholder="votre numero de telephone"
          />
        </div>
        <label htmlFor="adresse mail">adresse mail</label>
        <input
          type="adresse mail"
          adresse
          mail="adresse mail"
          placeholder="votre adresse mail"
        />
        <label htmlFor="=mot de passe">mot de passe</label>
        <input
          type="mot de passe"
          mot
          de
          passe="mot de passe"
          placeholder="votre mot de passe"
        />
        <label htmlFor="confirmation mot de passe ">
          confirmation mot de passe
        </label>
        <input
          type="confirmation mot de passe"
          confirmation
          mot
          de
          passe="confirmation mot de passe"
        />
        <div>
          <input type="submit" name="submit" placeholder="Envoyer" />
        </div>
      </form>
    </div>
  );
};

export default Home;
