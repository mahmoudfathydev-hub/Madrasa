import React from 'react'
import HeroPricing from '../../components/ComponentsPricing/HeroPricing/HeroPricing'
import './Pricing.scss'
import ChatBotPricing from '../../components/ComponentsPricing/ChatBotPricing/ChatBotPricing'


export default function Pricing() {
    return (
        <div className='pricing-page'>
            <HeroPricing />
            <ChatBotPricing />
        </div>
    )
}
