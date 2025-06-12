export const createProject = ({
  title,
  description,
  githubLink,
  demoLink = null,
  image = null,
  technologies = [],
  isBlog = false
}) => ({
  id: Date.now() + Math.random(),
  title,
  description,
  githubLink,
  demoLink,
  image,
  technologies,
  isBlog
});

export const createExperience = ({
  type,
  title,
  company,
  period,
  description,
  technologies = [],
  icon,
  iconBackground = "rgb(153 211 126)"
}) => ({
  id: Date.now() + Math.random(),
  type,
  title,
  company,
  period,
  description,
  technologies,
  icon,
  iconBackground
});

export const sortByDateDesc = (items, dateKey = 'period') => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a[dateKey].split(' - ')[0]);
    const dateB = new Date(b[dateKey].split(' - ')[0]);
    return dateB - dateA;
  });
};