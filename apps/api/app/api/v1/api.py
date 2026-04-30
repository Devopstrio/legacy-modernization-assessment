from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, applications, discover, assessment, recommendations, roadmap, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(applications.router, prefix="/applications", tags=["applications"])
api_router.include_router(discover.router, prefix="/discover", tags=["discover"])
api_router.include_router(assessment.router, prefix="/assessment", tags=["assessment"])
api_router.include_router(recommendations.router, prefix="/recommendations", tags=["recommendations"])
api_router.include_router(roadmap.router, prefix="/roadmap", tags=["roadmap"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
