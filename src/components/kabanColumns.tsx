import * as React from "react";
import Card from "./card";
import { useState, useEffect } from 'react';
import { gql, useQuery } from "@apollo/client";

type tasks = {
    id: number,
    title: string;
    priority: string;
    dateExecution: string;
    localExecution: string;
    description: string;
    imagem: string;
}[]


const TASKS_PAGINATED = gql`
        query TasksPaginated($first: Int, $after: String, $substring: String){
          getPaginated(first: $first, after: $after, substring: $substring) {
            pageInfo {
              endCursor
              hasNextPage
            }
            edges {
              node {
                id
                task_id
                name
                priority
                description
                execution_date
                execution_place
                files
                status
              }
            }
          }
        }
      `;


const KanbanColumns = ({ columnsMap, search }: { columnsMap: Array<[string, string]>, search: string }) => {
    let { data, loading, error, fetchMore, refetch } = useQuery(TASKS_PAGINATED, { variables: { first: 1, after: null } });

    useEffect(() => {
        if (search !== '')
            refetch({
                substring: search,
            })
        else
            refetch({
                first: 1,
            })

    }, [search])

    if (error) {
        console.log(error)
        return <div>errors</div>
    }

    if (loading || !data)
        return <div>Loading Data...</div>

    return (
        <div className="column-container">
            <div className="columns-wrapper w-[100%] flex">
                {columnsMap.map(([colName, attName]: [string, string], i) =>
                    <div className="task-column max-h-[85vh] overflow-hidden" key={i}>
                        <h3>{colName}</h3>
                        <hr className="custom-hr" />
                        <ul className="task-list max-h-[100%] overflow-auto">
                            {
                                data?.getPaginated?.edges.map(({ node: task }: any) =>
                                    task.status === attName ?
                                        < li key={task.id}>
                                            <Card
                                                key={task.id}
                                                task={task} />
                                        </li>
                                        : <></>
                                )
                            }
                        </ul>
                    </div>
                )
                }
            </div>
            <button className="rounded-md  
                bg-indigo-600  
                px-3.5  py-2.5  
                text-sm  
                font-semibold  
                text-white  
                shadow-sm              
                hover:bg-indigo-500  
                focus-visible:outline  
                focus-visible:outline-2  
                focus-visible:outline-offset-2  
                focus-visible:outline-indigo-600"
                onClick={() => {
                    const { endCursor } = data.getPaginated.pageInfo;
                    if (endCursor)
                        fetchMore({
                            variables: { after: endCursor },
                            updateQuery: (prevResult, { fetchMoreResult }) => {
                                fetchMoreResult.getPaginated.edges = [
                                    ...prevResult.getPaginated.edges,
                                    ...fetchMoreResult.getPaginated.edges
                                ];
                                return fetchMoreResult;
                            }
                        })

                }}
            >Carregar Mais Tasks</button>
        </div >
    );
}

export default KanbanColumns