from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_orders():
    return {'status': 'ok', 'service': 'gateway', 'proxy_to': 'orders-service'}
