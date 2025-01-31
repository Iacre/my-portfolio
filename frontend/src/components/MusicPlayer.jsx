import  { useState } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import { motion } from 'framer-motion';
import { FaMusic } from 'react-icons/fa';

const MusicPlayer = ({ tracks }) => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const handleTrackChange = (event) => {
    const selectedTrack = tracks.find(track => track.title === event.target.value);
    setCurrentTrack(selectedTrack);
  };

  return (
    <motion.div
      className="music-player bg-mysec p-4 rounded-full shadow-lg fixed bottom-4 right-4 group "
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaMusic className="text-white text-2xl" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-0 bg-mysec p-4 rounded-lg shadow-lg hidden group-hover:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-xl font-bold text-white mb-4">Browse My Website While Enjoying Your Favorite Song!</h2>
        <select
          className="w-full p-2 rounded-lg mb-4"
          onChange={handleTrackChange}
          value={currentTrack.title}
        >
          {tracks.map((track, index) => (
            <option key={index} value={track.title}>
              {track.title}
            </option>
          ))}
        </select>
        <ReactAudioPlayer
          src={currentTrack.url}
          autoPlay
          controls
          className="w-full"
        />
      </motion.div>
    </motion.div>
  );
};
MusicPlayer.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MusicPlayer;
