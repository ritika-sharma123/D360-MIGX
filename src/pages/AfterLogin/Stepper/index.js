import React from "react";
import "./index.scss";
import styled from "styled-components";
import { useState } from "react";
import Button from "./../../../components/Button";
import Check from "./../../../images/Check.png";
import ProjectForm from "./../../Project/ProjectForm";
import BreadCrumbs from "./../../../components/BreadCrumbs";
import Sources from "./../Sources";
import Target from "./../Target/Target";
import CreateSchema from "./../CreateSchema";
import SchemaComparison from "./../SchemaComparison";
import SchemaMigration from "./../SchemaMigration";
const MainStaper = styled.div`
  width: 260px;
  height: calc(100vh - 229px);
  border-right: 1px solid #c3c3c354;
  padding: 15px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  background-color: white;
`;
const ProjectCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: ${(props) =>
    props.projectProgressCircle ? "3px solid #0d99ff " : ""};
  border-radius: 100%;
  background-color: ${(props) => (props.projectProgress ? "#0d99ff" : "white")};
  color: ${(props) => (props.projectProgress ? "white" : "#0d99ff")};
`;
const ProjectName = styled.span`
  font-weight: 600;
`;
const SourceCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.sourceProgress ? "#0d99ff" : "white")};
  color: ${(props) =>
    props.sourceProgress
      ? "white"
      : props.sourceProgressCircle
      ? "#0d99ff"
      : "black"};
  height: 30px;
  width: 30px;
  border: ${(props) =>
    props.sourceProgressCircle ? "3px solid #0d99ff" : "3px solid #c3c3c3"};
  border-radius: 100%;
`;
const SourceName = styled.span`
  font-weight: ${(props) =>
    props.sourceProgress ? "600" : props.sourceProgressCircle ? "600" : ""};
`;
const TargetCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.targetProgress ? "#0d99ff" : "white")};
  color: ${(props) =>
    props.targetProgress
      ? "white"
      : props.targetProgressCircle
      ? "#0d99ff"
      : "black"};
  height: 30px;
  width: 30px;
  border: ${(props) =>
    props.targetProgressCircle ? "3px solid #0d99ff" : "3px solid #c3c3c3"};
  border-radius: 100%;
  span {
    color: ${(props) =>
      props.targetProgress
        ? "black"
        : props.targetProgressCircle
        ? "black"
        : ""};
  }
`;
const TargetName = styled.span`
  font-weight: ${(props) =>
    props.targetProgress ? "600" : props.targetProgressCircle ? "600" : ""};
`;
const SchemaCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.schemaProgress ? "#0d99ff" : "white")};
  color: ${(props) =>
    props.schemaProgress
      ? "white"
      : props.schemaProgressCircle
      ? "#0d99ff"
      : "black"};
  height: 30px;
  width: 30px;
  border: ${(props) =>
    props.schemaProgressCircle ? "3px solid #0d99ff" : "3px solid #c3c3c3"};
  border-radius: 100%;
  span {
    color: ${(props) =>
      props.schemaProgress
        ? "black"
        : props.schemaProgressCircle
        ? "black"
        : ""};
  }
`;
const SchemaName = styled.span`
  font-weight: ${(props) =>
    props.schemaProgress ? "600" : props.schemaProgressCircle ? "600" : ""};
`;
const SchemaCompariosnCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.schemaComprisonProgress ? "#0d99ff" : "white"};
  color: ${(props) =>
    props.schemaComprisonProgress
      ? "white"
      : props.schemaComparisonProgressCircle
      ? "#0d99ff"
      : "black"};
  height: 30px;
  width: 30px;
  border: ${(props) =>
    props.schemaComparisonProgressCircle
      ? "3px solid #0d99ff"
      : "3px solid #c3c3c3"};
  border-radius: 100%;
  span {
    color: ${(props) =>
      props.schemaComprisonProgress
        ? "black"
        : props.schemaComparisonProgressCircle
        ? "black"
        : ""};
  }
`;
const ComparisonName = styled.span`
  font-weight: ${(props) =>
    props.schemaComprisonProgress
      ? "600"
      : props.schemaComparisonProgressCircle
      ? "600"
      : ""};
`;
const AssessmentReportCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.assessmetProgress ? "#0d99ff" : "white"};
  color: ${(props) =>
    props.assessmetProgress
      ? "white"
      : props.assessmetCircle
      ? "#0d99ff"
      : "black"};
  height: 30px;
  width: 30px;
  border: ${(props) =>
    props.assessmetCircle ? "3px solid #0d99ff" : "3px solid #c3c3c3"};
  border-radius: 100%;
  span {
    color: ${(props) =>
      props.assessmetProgress ? "black" : props.assessmetCircle ? "black" : ""};
  }
`;
const AssessmentName = styled.span`
  font-weight: ${(props) =>
    props.assessmetProgress ? "600" : props.assessmetCircle ? "600" : ""};
`;
const SchemaMigrationCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.schemaMigProgress ? "#0d99ff" : "white"};
  color: ${(props) =>
    props.schemaMigProgress
      ? "white"
      : props.schemaMigCircle
      ? "#0d99ff"
      : "black"};
  height: 30px;
  width: 30px;
  border: ${(props) =>
    props.schemaMigCircle ? "3px solid #0d99ff" : "3px solid #c3c3c3"};
  border-radius: 100%;
  span {
    color: ${(props) =>
      props.schemaMigProgress ? "black" : props.schemaMigCircle ? "black" : ""};
  }
`;
const MigrationName = styled.span`
  font-weight: ${(props) =>
    props.schemaMigProgress ? "600" : props.assessmetCircle ? "600" : ""};
`;
const VerticalLineOne = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${(props) =>
    props.verticleLineOne ? "#0d99ff" : "#c3c3c385"};
  margin-left: 16px;
`;
const VerticalLineTwo = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${(props) =>
    props.verticleLineTwo ? "#0d99ff" : "#c3c3c385"};
  margin-left: 16px;
`;
const VerticalLineThree = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${(props) =>
    props.verticleLineThree ? "#0d99ff" : "#c3c3c385"};
  margin-left: 16px;
`;
const VerticalLineFour = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${(props) =>
    props.verticleLineFour ? "#0d99ff" : "#c3c3c385"};
  margin-left: 16px;
`;
const VerticalLineFive = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${(props) =>
    props.verticleLineFive ? "#0d99ff" : "#c3c3c385"};
  margin-left: 16px;
`;
const VerticalLineSix = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${(props) =>
    props.verticleLineSix ? "#0d99ff" : "#c3c3c385"};
  margin-left: 16px;
`;

const Stepper = () => {
  const [projectProgress, setProjectProgress] = useState(true);
  const [sourceProgress, setSourceProgress] = useState(false);
  const [targetProgress, setTargetProgress] = useState(false);
  const [schemaProgress, setSchemaProgress] = useState(false);
  const [schemaComprisonProgress, setSchemaComparisonProgress] =
    useState(false);
  const [assessmetProgress, setAssessmentProgress] = useState(false);
  const [schemaMigProgress, setSchemaMigProgress] = useState(false);

  const [verticleLineOne, setVerticleLineOne] = useState(false);
  const [verticleLineTwo, setVerticleLineTwo] = useState(false);
  const [verticleLineThree, setVerticleLineThree] = useState(false);
  const [verticleLineFour, setVerticleLineFour] = useState(false);
  const [verticleLineFive, setVerticleLineFive] = useState(false);
  const [verticleLineSix, setVerticleLineSix] = useState(false);

  const [projectProgressContent, setProjectContent] = useState(false);
  const [sourceProgressContent, setSourceProgressContent] = useState(false);
  const [targetProgressContent, setTargetProgressContent] = useState(false);
  const [schemaProgressContent, setSchemaProgressContent] = useState(false);
  const [schemaComparisonProgressContent, setSchemaComparisonProgressContent] =
    useState(false);
  const [assessmetContent, setAssessmentContent] = useState(false);
  const [schemaMigContent, setSchemaMigContent] = useState(false);

  const [projectProgressCircle, setProjectCircle] = useState(false);
  const [sourceProgressCircle, setSourceCircle] = useState(false);
  const [targetProgressCircle, setTargetCircle] = useState(false);
  const [schemaProgressCircle, setSchemaCircle] = useState(false);
  const [schemaComparisonProgressCircle, setSchemaComparisonCircle] =
    useState(false);
  const [assessmetCircle, setAssessmentAssessmentCircle] = useState(false);
  const [schemaMigCircle, setSchemaMigCircle] = useState(false);
  const [count, setCount] = useState(1);
  const nextClick = () => {
    if (count === 1) {
      setCount(count + 1);
      setProjectProgress(false);
      setProjectCircle(true);
      setProjectContent(true);
      setSourceProgress(true);
      setVerticleLineOne(true);
    } else if (count === 2) {
      setCount(count + 1);
      setTargetProgress(true);
      setVerticleLineTwo(true);
      setSourceCircle(true);
      setSourceProgressContent(true);
      setSourceProgress(false);
      setProjectContent(true);
    } else if (count === 3) {
      setCount(count + 1);
      setSchemaProgress(true);
      setVerticleLineThree(true);
      setTargetProgress(false);
      setTargetCircle(true);
      setTargetProgressContent(true);
    } else if (count === 4) {
      setCount(count + 1);
      setSchemaComparisonProgress(true);
      setVerticleLineFour(true);
      setSchemaProgress(false);
      setSchemaProgressContent(true);
      setSchemaCircle(true);
    } else if (count === 5) {
      setCount(count + 1);
      setAssessmentProgress(true);
      setVerticleLineFive(true);
      setSchemaComparisonProgress(false);
      setSchemaComparisonProgressContent(true);
      setSchemaComparisonCircle(true);
    } else if (count === 6) {
      setCount(count + 1);
      setSchemaMigProgress(true);
      setVerticleLineSix(true);
      setAssessmentProgress(false);
      setAssessmentContent(true);
      setAssessmentAssessmentCircle(true);
    }
  };
  const previousClick = () => {
    if (count === 2) {
      setCount(count - 1);
      setSourceProgress(false);
      setSourceCircle(false);
      setSourceProgressContent(false);
      setVerticleLineOne(false);
      setProjectProgress(true);
      setProjectContent(false);
    } else if (count === 3) {
      setCount(count - 1);
      setTargetProgress(false);
      setTargetCircle(false);
      setTargetProgressContent(false);
      setSourceProgressContent(false);
      setSourceCircle(false);
      setSourceProgress(true);
      setVerticleLineTwo(false);
    } else if (count === 4) {
      setCount(count - 1);
      setSchemaProgress(false);
      setVerticleLineThree(false);
      setTargetProgress(true);
      setTargetCircle(false);
      setTargetProgressContent(false);
    } else if (count === 5) {
      setCount(count - 1);
      setSchemaComparisonProgress(false);
      setVerticleLineFour(false);
      setSchemaProgress(true);
      setSchemaProgressContent(false);
      setSchemaCircle(false);
    } else if (count === 6) {
      setCount(count - 1);
      setAssessmentProgress(false);
      setVerticleLineFive(false);
      setSchemaComparisonProgress(true);
      setSchemaComparisonProgressContent(false);
      setSchemaComparisonCircle(false);
    } else if (count === 7) {
      setCount(count - 1);
      setSchemaMigProgress(false);
      setVerticleLineSix(false);
      setAssessmentProgress(true);
      setAssessmentContent(false);
      setAssessmentAssessmentCircle(false);
    }
  };
  const breadData = [
    { path: "projects", text: "Project " },
    { path: "createproject", text: "Create Project" },
  ];
  return (
    <div className="stepper">
      <div className="breadcrumbs-heading">
        <BreadCrumbs breadData={breadData} />
        <div className="create-project">
          <h3>Create Projects</h3>
        </div>
      </div>
      <div className="Staper-container">
        <MainStaper>
          <div className="project-staper">
            {" "}
            <ProjectCircle
              projectProgress={projectProgress}
              projectProgressCircle={projectProgressCircle}
            >
              {projectProgressContent ? <img src={Check} /> : 1}
            </ProjectCircle>
            <ProjectName>Project</ProjectName>
          </div>
          <VerticalLineOne verticleLineOne={verticleLineOne}></VerticalLineOne>
          <div className="source-staper">
            <SourceCircle
              sourceProgress={sourceProgress}
              sourceProgressCircle={sourceProgressCircle}
            >
              {sourceProgressContent ? <img src={Check} /> : 2}
            </SourceCircle>
            <SourceName
              sourceProgress={sourceProgress}
              sourceProgressCircle={sourceProgressCircle}
            >
              Source
            </SourceName>
          </div>
          <VerticalLineTwo verticleLineTwo={verticleLineTwo}></VerticalLineTwo>
          <div className="target-staper">
            <TargetCircle
              targetProgress={targetProgress}
              targetProgressCircle={targetProgressCircle}
            >
              {targetProgressContent ? <img src={Check} /> : 3}
            </TargetCircle>
            <TargetName
              targetProgress={targetProgress}
              targetProgressCircle={targetProgressCircle}
            >
              Target
            </TargetName>
          </div>
          <VerticalLineThree
            verticleLineThree={verticleLineThree}
          ></VerticalLineThree>
          <div className="schema-staper">
            <SchemaCircle
              schemaProgress={schemaProgress}
              schemaProgressCircle={schemaProgressCircle}
            >
              {schemaProgressContent ? <img src={Check} /> : 4}
            </SchemaCircle>
            <SchemaName
              schemaProgress={schemaProgress}
              schemaProgressCircle={schemaProgressCircle}
            >
              Choose Schema
            </SchemaName>
          </div>
          <VerticalLineFour
            verticleLineFour={verticleLineFour}
          ></VerticalLineFour>
          <div className="schema-comparison">
            <SchemaCompariosnCircle
              schemaComprisonProgress={schemaComprisonProgress}
              schemaComparisonProgressCircle={schemaComparisonProgressCircle}
            >
              {schemaComparisonProgressContent ? <img src={Check} /> : 5}
            </SchemaCompariosnCircle>
            <ComparisonName
              schemaComprisonProgress={schemaComprisonProgress}
              schemaComparisonProgressCircle={schemaComparisonProgressCircle}
            >
              {" "}
              Schema Comparison
            </ComparisonName>
          </div>
          <VerticalLineFive
            verticleLineFive={verticleLineFive}
          ></VerticalLineFive>
          <div className="assessment-report">
            <AssessmentReportCircle
              assessmetProgress={assessmetProgress}
              assessmetCircle={assessmetCircle}
            >
              {assessmetContent ? <img src={Check} /> : 6}
            </AssessmentReportCircle>
            <AssessmentName
              assessmetProgress={assessmetProgress}
              assessmetCircle={assessmetCircle}
            >
              Assessment Report
            </AssessmentName>
          </div>
          <VerticalLineSix verticleLineSix={verticleLineSix}></VerticalLineSix>
          <div className="schema-migration">
            <SchemaMigrationCircle
              schemaMigProgress={schemaMigProgress}
              schemaMigCircle={schemaMigCircle}
            >
              {schemaMigContent ? <img src={Check} /> : 7}
            </SchemaMigrationCircle>
            <MigrationName
              schemaMigProgress={schemaMigProgress}
              schemaMigCircle={schemaMigCircle}
            >
              Schema Migration
            </MigrationName>
          </div>
        </MainStaper>
        <div className="pages-container">
          <div className="page-rendring">
            {projectProgress ? (
              <ProjectForm />
            ) : sourceProgress ? (
              <Sources />
            ) : targetProgress ? (
              <Target />
            ) : schemaProgress ? (
              <CreateSchema />
            ) : schemaComprisonProgress ? (
              <SchemaComparison />
            ) : schemaMigProgress ? (
              <SchemaMigration />
            ) : assessmetProgress ? (
              <SchemaMigration />
            ) : (
              ""
            )}
          </div>
          <div className="staper-button-container">
            <Button
              buttonText="Next"
              background="#0d99ff"
              color="white"
              clickHandler={nextClick}
            />
            <Button buttonText="Previous" clickHandler={previousClick} />
            <Button buttonText="Cancel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
