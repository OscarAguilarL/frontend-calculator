import {useRef, useState} from 'react'

enum Operators {
    sum,
    subtract,
    multiply,
    division,
    percentage,
}

export const useCalculator = () => {
    const [number, setNumber] = useState('0')
    const [previousNumber, setPreviousNumber] = useState('0')

    const lastOperation = useRef<Operators>()

    const clean = () => {
        setNumber('0')
        setPreviousNumber('0')
    }

    const setupNumber = (textNumber: string) => {
        // no aceptar doble punto
        if (number.includes('.') && textNumber === '.') return

        if (number.startsWith('0') || number.startsWith('-0')) {
            // Punto decimal
            if (textNumber === '.') {
                setNumber(number + textNumber)

                // Evaluar si es otro cero y hay un punto
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber)

                // Evaluar si es diferente de cero y no tiene un punto
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber)

                // evitar 000.00
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number)
            } else {
                setNumber(number + textNumber)
            }
        } else {
            setNumber(number + textNumber)
        }
    }

    const positiveNegative = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    const btnDel = () => {
        let negative = ''
        let tempNumber = number
        if (number.includes('-')) {
            negative = '-'
            tempNumber = number.substr(1)
        }

        if (tempNumber.length > 1) {
            setNumber(negative + tempNumber.slice(0, -1))
        } else {
            setNumber('0')
        }
    }

    const changeNumberToPrevious = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1))
        } else {
            setPreviousNumber(number)
        }
        setNumber('0')
    }

    const btnDivision = () => {
        changeNumberToPrevious()
        lastOperation.current = Operators.division
    }

    const btnMultiply = () => {
        changeNumberToPrevious()
        lastOperation.current = Operators.multiply
    }
    const btnSubtract = () => {
        changeNumberToPrevious()
        lastOperation.current = Operators.subtract
    }
    const btnSum = () => {
        changeNumberToPrevious()
        lastOperation.current = Operators.sum
    }
    const btnPercentage = () => {
        changeNumberToPrevious()
        lastOperation.current = Operators.percentage
    }

    const calculate = () => {
        const num1 = Number(number)
        const num2 = Number(previousNumber)

        if (previousNumber === '0') return

        switch (lastOperation.current) {
            case Operators.sum:
                setPreviousNumber(`${num1 + num2}`)
                break
            case Operators.subtract:
                setPreviousNumber(`${num2 - num1}`)
                break
            case Operators.multiply:
                setPreviousNumber(`${num1 * num2}`)
                break
            case Operators.division:
                let result = num2 / num1
                !isFinite(result)
                    ? setPreviousNumber('Math error')
                    : setPreviousNumber(`${result}`)
                break
            case Operators.percentage:
                setPreviousNumber(`${(num2 / num1) * 100}%`)
                break
        }
        setNumber('0')
    }
    return {
        number,
        previousNumber,
        clean,
        setupNumber,
        positiveNegative,
        btnDel,
        btnDivision,
        btnMultiply,
        btnSubtract,
        btnSum,
        btnPercentage,
        calculate,
    }
}
