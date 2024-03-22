import { UserService } from '../services/index.js'

const userService = new UserService();

export const signUp = async ( req, res ) => {
    try {
        const user = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        })
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new User',
            data: user,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        })
    }
}

export const login = async ( req, res ) => {
    try {
        const token = await userService.signIn(req.body)      
        return res.status(200).json({
            success: true,
            message: 'Successfully logged In',
            data: token,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            err: error
        })
    }
}