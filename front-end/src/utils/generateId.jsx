const THREE = 3;

const generateId = (id) => {
  if (id.toString().length === 1) return `000${id}`;
  if (id.toString().length === 2) return `00${id}`;
  if (id.toString().length === THREE) return `0${id}`;

  return id;
};

export default generateId;
