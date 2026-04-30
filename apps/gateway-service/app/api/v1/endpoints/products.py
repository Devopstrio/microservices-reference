from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_products():
    return {'status': 'ok', 'service': 'gateway', 'proxy_to': 'products-service'}
