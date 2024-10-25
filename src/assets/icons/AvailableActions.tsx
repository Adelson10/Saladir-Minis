const AvailableAction = ({cp, type, icon, title} : {cp: string, type: string, icon: string, title: string}) => {
  return (
    <svg width="97" height="108" viewBox="0 0 97 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.75" y="0.5" width="95.0086" height="107" stroke="url(#paint0_linear_498_4)" strokeOpacity="0.4" />
      <text x="10" y="20" fontFamily="Arial" fontSize="14" fill="black">{cp}</text>
      <text x="10" y="40" fontFamily="Arial" fontSize="14" fill="black">{type}</text>
      <rect x="48.2543" y="18.175" width="36.9621" height="36.9621" rx="2" transform="rotate(45 48.2543 18.175)" fill="#00C5D3" />
      <text x="55" y="50" fontFamily="Arial" fontSize="14" fill="white" transform="rotate(45 55 50)">{title}</text>
      <defs>
        <linearGradient id="paint0_linear_498_4" x1="48.2543" y1="0.5" x2="48.2543" y2="107.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#ADADAD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AvailableAction;