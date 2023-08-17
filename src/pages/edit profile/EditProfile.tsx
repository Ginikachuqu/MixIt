// Essentials
import { useState, useContext } from "react";

// Styles
import { Allergies, Restrictions, Wrapper } from "./EditProfile.styles";

// Icons
import { FaPen } from "react-icons/fa";
import { AiOutlineClose, AiFillPlusCircle } from "react-icons/ai";

// Context
import { EditProfileContext } from "../../contexts/editprofile/EditProfile";
// interface IAppProps {
// }

const EditProfile: React.FunctionComponent<IAppProps> = (props) => {
  const {
    allergies,
    restrictions,
    addAllergy,
    removeAllergy,
    addRestriction,
    removeRestriction,
    handleInputChange,
    allergyContent,
  } = useContext(EditProfileContext);

  return (
    <Wrapper>
      <div className="content">
        <div className="top">
          <div className="profile__photo-container">
            <img
              src="../../../public/images/pexels-mo-eid-11798029.jpg"
              alt=""
            />
            <div className="edit__icon">
              <FaPen />
            </div>
          </div>
          <div className="user">
            <div className="user__name">
              <h2>Charles Grandison</h2>
            </div>
            <div className="user__location">Abuja, Nigeria</div>
          </div>
        </div>
        <div className="bottom">
          <form>
            <div className="edit__section edit__section-left">
              <div className="display__name">
                <span>Display Name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Display Name"
                  autoComplete="none"
                  //   value={name}
                  //   onChange={onChange}
                />
              </div>
              <div className="bio">
                <span>Bio</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Bio"
                  autoComplete="none"
                  //   value={name}
                  //   onChange={onChange}
                />
              </div>
              <div className="location">
                <span>Location</span>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Enter Location"
                  autoComplete="none"
                  //   value={name}
                  //   onChange={onChange}
                />
              </div>
              <div className="facebook">
                <span>Facebook</span>
                <input
                  type="text"
                  name="facebook"
                  id="facebook"
                  placeholder="Enter Facebook Profile Url"
                  autoComplete="none"
                  //   value={name}
                  //   onChange={onChange}
                />
              </div>
              <div className="Twitter">
                <span>Twitter</span>
                <input
                  type="text"
                  name="Twitter"
                  id="Twitter"
                  placeholder="Enter Twitter Profile Url"
                  autoComplete="none"
                  //   value={name}
                  //   onChange={onChange}
                />
              </div>
            </div>
            <div className="edit__section edit__section-right">
              {/* Allergies */}
              <Allergies>
                <div className="allergy__header">
                  <span>Allergies</span>
                </div>
                <div className="allergy__body">
                  {allergies.map((allergy) => (
                    <div className="allergy__item">
                      <div className="allergy__name">
                        <p
                          contentEditable
                          suppressContentEditableWarning={true}
                          data-placeholder="Lactose Intolerance"
                        >
                          {allergy.name}
                        </p>
                      </div>
                      <div className="remove__icon">
                        <AiOutlineClose onClick={() => removeAllergy(allergy.id)} />
                      </div>
                    </div>
                  ))}

                  <div className="controls">
                    <button onClick={addAllergy} className="add__step">
                      <AiFillPlusCircle />
                      <span>Allergy</span>
                    </button>
                  </div>
                </div>
              </Allergies>

              {/* Dietary Restrictions */}
              <Restrictions>
                <div className="restriction__header">
                  <span>Dietary Restrictions</span>
                </div>
                <div className="restriction__body">
                  {restrictions.map((restriction) => (
                    <div className="restriction__item">
                      <div className="restriction__name">
                        <p
                          contentEditable
                          suppressContentEditableWarning={true}
                          data-placeholder="Diabetic"
                        >
                          {restriction.name}
                        </p>
                      </div>
                      <div className="remove__icon">
                        <AiOutlineClose
                          onClick={() => removeRestriction(restriction.id)}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="controls">
                    <button onClick={addRestriction} className="add__step">
                      <AiFillPlusCircle />
                      <span>Restriction</span>
                    </button>
                  </div>
                </div>
              </Restrictions>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default EditProfile;
