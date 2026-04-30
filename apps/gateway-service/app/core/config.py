from pydantic import BaseSettings

class Settings(BaseSettings):
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Microservices Gateway"
    
    USER_SERVICE_URL: str = "http://user-service:8000"
    ORDER_SERVICE_URL: str = "http://order-service:8000"
    PAYMENT_SERVICE_URL: str = "http://payment-service:8000"
    INVENTORY_SERVICE_URL: str = "http://inventory-service:8000"

    class Config:
        env_file = ".env"

settings = Settings()
