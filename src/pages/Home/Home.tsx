import React, { useState} from "react";

import {iexApi} from "../../store/reducers/iex";
import {Spinner} from '@chakra-ui/react'

import {Table, Tbody, Tr, Td, TableContainer} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom";


export const Home = () => {

    const navigate = useNavigate()

    const [value, setValue] = useState('aapl')

    const {data, isLoading} = iexApi.useQuoteElementQuery(value)

    const sale = data && data[0]

    const title = () => {
        if(value === 'aapl'){
            return 'Apple'
        }else if(value === 'msft'){
            return "Microsoft"
        }else if(value === 'tsla'){
            return 'Tesla'
        }else if(value === 'se'){
            return 'Sea Ltd'
        }else if(value === 'kr'){
            return 'Sea Ltd'
        }
    }

    return(
        <section className="home">
            <div className="home__content">

                <div className="home__tabs">

                    <p className="home__tabs-btn" style={{
                        borderBottom: value === 'aapl' ? "3px solid white": ''
                    }} onClick={() => setValue('aapl')}>Apple</p>

                    <p className="home__tabs-btn" style={{
                        borderBottom: value === 'msft' ? "3px solid white": ''
                    }} onClick={() => setValue('msft')}>Microsoft</p>

                    <p className="home__tabs-btn" style={{
                        borderBottom: value === 'tsla' ? "3px solid white": ''
                    }} onClick={() => setValue('tsla')}>Tesla</p>

                    <p className="home__tabs-btn" style={{
                        borderBottom: value === 'se' ? "3px solid white": ''
                    }} onClick={() => setValue('se')}>Sea Ltd - ADR</p>

                    <p className="home__tabs-btn" style={{
                        borderBottom: value === 'kr' ? "3px solid white": ''
                    }} onClick={() => setValue('kr')}>Kroger</p>

                </div>

                <div className="home__table">
                    <h2 className="home__table-title">Stock quote for {title()}:</h2>
                    {isLoading?
                        <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/> :
                        <TableContainer bg='white' borderRadius={10}>
                            <Table variant='striped' colorScheme='teal'>
                                <Tbody>
                                    <Tr>
                                        <Td>Name company : </Td>
                                        <Td className="home__table-border">{sale?.companyName}</Td>
                                        <Td>Total volume : </Td>
                                        <Td >{sale?.avgTotalVolume}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Currency : </Td>
                                        <Td className="home__table-border">{sale?.currency}</Td>
                                        <Td>Change percent : </Td>
                                        <Td >{sale?.changePercent}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Latest time :  </Td>
                                        <Td className="home__table-border">{sale?.latestTime}</Td>
                                        <Td>Extended price : </Td>
                                        <Td >{sale?.extendedPrice}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Close source : </Td>
                                        <Td className="home__table-border">{sale?.closeSource}</Td>
                                        <Td>Open time : </Td>
                                        <Td >{sale?.iexOpenTime}</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Calculation Price :  </Td>
                                        <Td className="home__table-border">{sale?.calculationPrice}</Td>
                                        <Td>Low time : </Td>
                                        <Td >{sale?.lowTime}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>}
                </div>

                <button className="home__table-btn" onClick={() => navigate(`/cashFlow/${sale?.symbol.toLowerCase()}`)}>Cash flow {
                    value === 'aapl' ? "apple" :
                        value === 'msft' ? "microsoft":
                            value === 'tsla'? "tesla" :
                                value === 'se'? "sea ltd" :
                                    value === 'kr'? "kroger" :''}</button>
            </div>
        </section>
    )
}