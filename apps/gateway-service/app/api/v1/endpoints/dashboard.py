from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_dashboard():
    return {'status': 'ok', 'service': 'gateway', 'proxy_to': 'dashboard-service'}
