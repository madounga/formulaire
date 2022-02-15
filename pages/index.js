import { Formik, Field, Form, ErrorMessage } from "formik";
import Head from "next/head";
import Link from "next/link";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nom: Yup.string()
    .required("Le nom est obligatoire")
    .min(3, "La nom doit avoir au minimum 3 caractères"),
  prenom: Yup.string()
    .required("Le prénom est obligatoire")
    .min(3, "La prénom doit avoir au minimum 3 caractères"),
  adresse: Yup.string()
    .required("L'adresse est obligatoire")
    .min(5, "L'adresse doit avoir au minimum 5 caractères"),
  codepostal: Yup.number()
    .typeError("Veuillez saisir un code valide")
    .nullable(false)
    .required("Le code postal est obligatoire"),
  telephone: Yup.number()
    .typeError("Veuillez saisir un numéro de téléphone valide")
    .nullable(false)
    .required("Le numéro de téléphone est obligatoire"),
  email: Yup.string()
    .email()
    .nullable(false)
    .required("L'adresse mail est obligatoire"),
});

export const AddPersonne = () => {
  const initialValues = {
    nom: "",
    prenom: "",
    adresse: "",
    codepostal: "",
    telephone: "",
    email: "",
  };

  function expenseSubmit(formValues) {
    const { nom, prenom, adresse, codepostal, telephone, email } = formValues;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={expenseSubmit}
      >
        {(formik) => (
          <Form>
            <div className="col-md-8 mx-auto">
              <div>
                <Link href="/annuaire">
                  <a className="btn btn-primary my-3">Consulter annnuaire</a>
                </Link>
              </div>
              <div className="bg-dark">
                <h2 className="text-white text-center">Nouvelle entrée</h2>
              </div>
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <Field name="nom" type="text" className="form-control" />
                <ErrorMessage
                  name="nom"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prénom</label>
                <Field name="prenom" type="text" className="form-control" />
                <ErrorMessage
                  name="prenom"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div className="form-group">
                <label htmlFor="adresse">Adresse</label>
                <Field name="adresse" type="text" className="form-control" />
                <ErrorMessage
                  name="adresse"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="codepostal">Code postal</label>
                <Field
                  name="codepostal"
                  type="number"
                  className="form-control"
                />
                <ErrorMessage
                  name="codepostal"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="telephone">telephone</label>
                <Field
                  name="telephone"
                  type="number"
                  className="form-control"
                />
                <ErrorMessage
                  name="telephone"
                  className="text-danger"
                  component="span"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  className="text-danger"
                  component="span"
                />
              </div>
              <button className="btn btn-primary" disabled={!formik.isValid}>
                Ajouter
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddPersonne;
