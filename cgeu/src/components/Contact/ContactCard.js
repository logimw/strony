import React from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaRegEnvelope, FaPhone } from "react-icons/fa";

const ContactCard = () => {
  return (
    <Card>
      <h3>Cosmo group</h3>
      <ul>
        <li>
          <i>
            <FaMapMarkerAlt />
          </i>

          <span>Jasielska Street 10 A, 60-476 Poland</span>
        </li>
        <li>
          <i>
            <FaRegEnvelope />
          </i>

          <span>
            <a href="mailto:export@cosmo-group.eu">export@cosmo-group.eu</a>
          </span>
        </li>
        <li>
          <i>
            <FaPhone />
          </i>

          <span>
            <a href="tel:+48123456799">+48 123 456 799</a>
          </span>
        </li>
      </ul>
    </Card>
  );
};

const Card = styled.div`
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 900;
  }
  i {
    font-size: 3rem;
    color: var(--primaryColor);
    padding-right: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--mainBlack);
    &:hover {
      color: var(--primaryColor);
    }
  }
  li span {
    font-size: 1.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
`;

export default ContactCard;
