import React from 'react'
import Layout from './Layout'
import ContractItem from '../components/contractItem';


function Skills() {
  return (
    <Layout pageName={"Skills & Certificats"} isCaregiver>
            <div className="skillsPage">

<div className='skillsContainer col'>
    <h1>{"Certificats & Docs"}</h1>
    <ContractItem isDoc></ContractItem>
    <ContractItem isDoc></ContractItem>
    <ContractItem isDoc></ContractItem>
        
</div>

            </div>
    </Layout>
  )
}

export default Skills