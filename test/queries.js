const queries = require('../database/queries')
var expect = require('chai').expect

describe('#provisionSim', () => {
    it('should provision a simcard', async function () {
        const simcard = {
            iccid: 5465476465405465656,
            imsi: 54654664654854656546,
            ki: '46641321164654654654',
            pin1: 3243,
            puc: 4664956,
        }
        const result = await queries.provisionSim(simcard)
        expect(result).to.include(simcard);
    });
})
describe('#activateSim', () => {
    it('should activate a simcard', async function () {
        const simcard = {
            iccid: 5465476465405465656,
            imsi: 54654664654854656546,
            msisdn: 254705031577,
        }
        const result = await queries.activateSim(simcard)
        expect(result).to.include(simcard);
    });
})
describe('#querySubscriberInfo', () => {
    it('should return simcard info', async function () {
        const simcard = {
            msisdn: 254705031577,
        }
        const result = await queries.querySubscriberInfo(simcard)
        expect(result).to.include(simcard);
    });
})
describe('#adjustAccountBalance', () => {
    it('should increment accountBalance', async function () {
        const simcard = {
            msisdn: 254705031577,
            amount: 40,
        }
        const result = await queries.adjustAccountBalance(simcard)

        expect(result.accountBalance).to.equal(simcard.amount);
    });
    it('should decrement accountBalance', async function () {
        const simcard = {
            msisdn: 254705031577,
            amount: -4,
        }
        const result = await queries.adjustAccountBalance(simcard)

        expect(result.accountBalance).to.equal(36);
    });
})