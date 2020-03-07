import * as React from "react";
import {ContentfulSchool} from "../utils/schema";

interface SchoolProps {
    school: ContentfulSchool;
}

const School = ({school}: SchoolProps) => {
    return (
        <div className="columns is-wrapped">
            <h3 className="sr-only">{school.name}</h3>
            <div className="column has-text-centered">
                <img src={school.logo.file.url} alt="" />
                <br />
                <br />
                <p className="subtitle is-4">{school.city} Campus</p>
                <p className="subtitle is-4" style={{marginTop: "-1.25rem"}}>
                    Fall {new Date(school.startDate).getFullYear()}
                    &nbsp;-&nbsp;
                    Spring {new Date(school.endDate).getFullYear()}
                </p>
            </div>
            <div className="column">
                <ul className="block-list">
                    <li className="tags">
                        <h4 className="subtitle is-block" style={{width: "100%"}}>Majors</h4>
                        <span className="tag is-info is-medium">{school.major}</span>
                    </li>
                    <li className="tags">
                        <h4 className="subtitle is-block" style={{width: "100%"}}>Minors</h4>
                        {school.minor.map(tag => <span className="tag is-info is-light is-medium" key={tag}>{tag}</span>)}
                    </li>
                    <li className="tags">
                        <h4 className="subtitle is-block" style={{width: "100%"}}>Concentrations</h4>
                        {school.concentration.map(tag => <span className="tag is-info is-light is-medium" key={tag}>{tag}</span>)}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default School;