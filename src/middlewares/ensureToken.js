export function ensureToken(req, res, next){
    const bearerHeader = req.headers['authorization']
    if(bearerHeader !== 'undefined'){
        const splitBearer = bearerHeader.split(' ')
        const bearerToken = splitBearer[1]
        req.token = bearerToken

        next()
    }else{
        res.sendStatus(403)
    }
}