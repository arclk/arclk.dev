import { useState, useMemo } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { BsFilter } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects } from "../../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (filter !== "All") {
      filtered = filtered.filter(project => project.category === filter);
    }

    return filtered;
  }, [filter]);

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="text-center mb-4">
          <h1 className="project-heading">
            My Recent <strong className="green">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on. Use the filters below to explore by category.
          </p>
        </div>

        {/* Filter Controls - Simplified */}
        <Row className="mb-4">
          {/* Mobile Only - Dropdown Layout */}
          <Col xs={12} className="d-block d-md-none mb-3">
            <div className="d-flex align-items-center gap-2 justify-content-center">
              <BsFilter className="text-white" />
              <span className="text-white">Filter:</span>
                
              <Dropdown>
                <Dropdown.Toggle 
                  variant="outline-light" 
                  id="dropdown-filter-mobile"
                  size="sm"
                  className="d-flex align-items-center gap-2"
                >
                  {filter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {categories.map(category => (
                    <Dropdown.Item
                      key={category}
                      active={filter === category}
                      onClick={() => handleFilterChange(category)}
                    >
                      {category}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>

          {/* Desktop and Tablet - Filter Buttons */}
          <Col xs={12} className="d-none d-md-block">
            <div className="d-flex align-items-center justify-content-center">
              <div className="d-flex align-items-center gap-2 flex-wrap justify-content-center">
                <BsFilter className="text-white" />
                <span className="text-white">Filter:</span>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={filter === category ? "success" : "outline-light"}
                    onClick={() => handleFilterChange(category)}
                    size="sm"
                    style={{ 
                      whiteSpace: 'nowrap',
                      pointerEvents: 'all',
                      zIndex: 10,
                      position: 'relative'
                    }}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Projects Count */}
        <div className="text-center mb-4">
          <p className="text-muted">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project) => (
            <Col 
              key={project.id}
              xs={12}
              md={6}
              lg={4}
              className="project-card"
            >
              <ProjectCard
                imgPath={project.image}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.githubLink}
                demoLink={project.demoLink}
                technologies={project.technologies}
                category={project.category}
                year={project.year}
              />
            </Col>
          ))}
        </Row>

        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No projects found matching the current filters.</p>
            <Button 
              variant="outline-light" 
              onClick={() => handleFilterChange("All")}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;