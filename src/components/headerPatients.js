import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { NavDropdown } from 'react-bootstrap'

const HeaderPatients = () => (
    <StaticQuery
        query={graphql`
            query headerMenuPatientsQuery {
                allHeaderMenuPatientsJson
                (filter: {category: {eq: "patients"}}) 
                {
                    edges {
                        node {
                            title
                            link
                            category
                        }
                    }
                }
            }
        `}
        render={data => (
        <>
        <NavDropdown.Item className="nav-link">                                        
                    {getHeaderMenuPatients(data)}
        </NavDropdown.Item>
        </>
        )}
    />
)

function getHeaderMenuPatients(data) {
    const HeaderMenuPatientsArray = [];
    data.allHeaderMenuPatientsJson.edges.forEach(item =>
      HeaderMenuPatientsArray.push(
        <Link to={item.node.link} className="nav-link">
          {item.node.title}
        </Link>
        )
    );
    return HeaderMenuPatientsArray;
}

export default HeaderPatients


