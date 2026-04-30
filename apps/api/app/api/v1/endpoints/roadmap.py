from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_roadmap():
    return {'status': 'ok'}
