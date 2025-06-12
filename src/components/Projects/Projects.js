import { useState, useMemo } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { BsGrid3X3Gap, BsList, BsFilter } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects } from "../../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    if (filter !== "All") {
      filtered = filtered.filter(project => project.category === filter);
    }

    return filtered;
  }, [filter]);

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

        {/* Filter and View Controls */}
        <Row className="mb-4">
          <Col lg={8} className="mb-3">
            <div className="d-flex flex-wrap align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <BsFilter className="text-white" />
                <span className="text-white">Filter:</span>
                <ButtonGroup size="sm">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={filter === category ? "success" : "outline-light"}
                      onClick={() => setFilter(category)}
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </ButtonGroup>
              </div>
            </div>
          </Col>
          
          <Col lg={4} className="mb-3">
            <div className="d-flex align-items-center justify-content-lg-end gap-3">
              <ButtonGroup size="sm">
                <Button
                  variant={viewMode === "grid" ? "success" : "outline-light"}
                  onClick={() => setViewMode("grid")}
                >
                  <BsGrid3X3Gap />
                </Button>
                <Button
                  variant={viewMode === "list" ? "success" : "outline-light"}
                  onClick={() => setViewMode("list")}
                >
                  <BsList />
                </Button>
              </ButtonGroup>
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
              md={viewMode === "list" ? 12 : 6}
              lg={viewMode === "list" ? 12 : 4}
              className="project-card mb-4"
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
                viewMode={viewMode}
              />
            </Col>
          ))}
        </Row>

        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No projects found matching the current filters.</p>
            <Button 
              variant="outline-light" 
              onClick={() => setFilter("All")}
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
