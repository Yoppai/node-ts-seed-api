import bcrypt from 'bcryptjs' //TODO: <--- 😎

//TODO: Encriptamos!!
const encrypt = async (textPlain: string) => { //TODO: 123456
    const hash = await bcrypt.hash(textPlain, 10) //0404o4ofoto4o
    return hash
}

//TODO: Comparamos!!
const compare = async (passwordPlain: string, hashPassword: string) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}

export { encrypt, compare }