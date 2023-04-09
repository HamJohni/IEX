import React from "react";
import DataTable from "react-data-table-component"
import {iexApi} from "../../store/reducers/iex";
import {useNavigate, useParams} from "react-router-dom";
import {Spinner} from "@chakra-ui/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'

export const CashFlow = () => {

    const navigate = useNavigate()

    const {company} = useParams()

    const {data, isLoading} = iexApi.useCashFlowQuery(company? company : '')

    const cash: any = data && data

    const columnsCash = [
        {
            name: 'Currency',
            selector: (row :any) => row.currency,
            sortable: true
        },
        {
            name: 'Сash сhange',
            selector: (row :any) => row.cashChange,
            sortable: true
        },
        {
            name: 'Cash flow',
            selector: (row :any) => row.cashFlow,
            sortable: true
        },
        {
            name: 'Cash flow financing',
            selector: (row :any) => row.cashFlowFinancing,
            sortable: true
        },
        {
            name: 'Cash flow financing',
            selector: (row :any) => row.cashFlowFinancing,
            sortable: true
        },
        {
            name: 'Total investing',
            selector: (row :any) => row.totalInvestingCashFlows,
            sortable: true
        },
    ]

    const title = () => {
        if(company === 'aapl'){
            return 'Apple'
        }else if(company === 'msft'){
            return "Microsoft"
        }else if(company === 'tsla'){
            return 'Tesla'
        }else if(company === 'se'){
            return 'Sea Ltd'
        }else if(company === 'kr'){
            return 'Sea Ltd'
        }
    }

    return (
        <section className="cash">
            <Breadcrumb spacing='8px' className="cash__links">
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink>{company?.toUpperCase()}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <h2 className="cash__title">{title()} cash flow last 25: </h2>
            <div className="cash__content">
                {isLoading ?
                    <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/> :
                    <DataTable columns={columnsCash} data={cash} fixedHeader pagination/>
                }
            </div>
        </section>
    )
}