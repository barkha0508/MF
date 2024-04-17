
import React from 'react';
import styled from 'styled-components';

const ContactCard = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid black;
`

const Name = styled.h2`
  font-size: 1.5em;
  color: #333;
`

const Email = styled.a`
  display: block;
  color: #0077cc;
  text-decoration: none;
  margin: 5px 0;
`

const Phone = styled.p`
  color: #555;
`

export const ContactInfo = ({ name, email, phone }) => {
  return (
    <ContactCard>
      <Name>Name: {"Name"}</Name>
      <Email href={`mailto:${email}`}>EMAIL: {"abc@gmail.com"}</Email>
      <Phone>Phone: {"##########"}</Phone>
    </ContactCard>
  );
};

export default ContactInfo;