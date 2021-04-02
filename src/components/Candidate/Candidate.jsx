import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import CandidateContent from '../CandidateContent/CandidateContent';
import { ListCard, Card } from './styles';
import location from '../../themes/assets/location.png';

function Candidate({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const experience = item.experience.split(' ');
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <ListCard layout onClick={toggleOpen} initial={{ borderRadius: 6 }} style={{ boxShadow: '1px 1px 3px -1px black' }}>
      <Card className="card" layout>
        <Card.Content>
          <span>
            Experiência:
            {experience[0]}
          </span>
        </Card.Content>
        <Card.Content>
          <img src={location} alt="Location" />
          <span>{item.city}</span>
        </Card.Content>
      </Card>
      <AnimatePresence>{isOpen && <CandidateContent item={item} />}</AnimatePresence>
    </ListCard>
  );
}
Candidate.propTypes = {
  item: PropTypes.shape({
    city: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
  }).isRequired,
};

export default Candidate;
