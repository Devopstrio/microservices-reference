from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_auth():
    return {'status': 'ok', 'service': 'gateway', 'proxy_to': 'auth-service'}
