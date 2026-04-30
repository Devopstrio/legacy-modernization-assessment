from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_assessment():
    return {'status': 'ok'}
