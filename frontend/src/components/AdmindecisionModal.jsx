import PropTypes from "prop-types";

function AdmindecisionModal({ handleOpenIdeaModal }) {
  return (
    <div className="adminDecisionModal">
      <div
        className="modal-cross-container"
        onClick={handleOpenIdeaModal}
        role="presentation"
      >
        <div className="cross-img-container" role="presentation">
          <img src="/images/icon_cross.png" alt="cross_logo" />
        </div>
      </div>
      <h4>TITRE DE L'IDEE</h4>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        possimus magni, doloribus ex rem pariatur earum illum dolorem odio qui
        consectetur nostrum doloremque, consequatur et numquam iusto minus
        officia minima? Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Sapiente ad similique aut saepe quisquam tempora culpa laudantium
        quos porro quo rerum ratione error, ducimus architecto eum temporibus
        ut. Aperiam, fugit. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Repellendus minima excepturi officia, perferendis quibusdam
        delectus nihil laboriosam. Perspiciatis atque architecto dolore facere
        cum eos quisquam nemo quidem maxime, consequuntur velit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Eaque impedit animi a
        deserunt eos esse ullam iure nobis? Sunt, quia. Numquam fugit, incidunt
        qui suscipit animi architecto recusandae vel perferendis! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dignissimos harum facere
        labore itaque odit dolore sit at ab nemo? Obcaecati nisi optio eos
        nostrum eum itaque, iure perferendis nobis excepturi.
      </p>
      <label htmlFor="start">
        Date de fin du vote en cas d'acceptation de soumission de l'idée :
      </label>

      <input
        type="date"
        id="start"
        name="trip-start"
        value="2023-07-22"
        min="2023-01-01"
        max="3000-12-31"
      />
      <div className="decision">
        <input
          type="submit"
          value="Soumettre l'idée au vote"
          className="choice refuse"
        />
        <input
          type="submit"
          value="Ne pas soumettre l'idée au vote"
          className="choice accept"
        />
      </div>
    </div>
  );
}

AdmindecisionModal.propTypes = {
  handleOpenIdeaModal: PropTypes.func.isRequired,
};

export default AdmindecisionModal;
