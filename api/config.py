from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class BaseConfig(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env.local", env_file_encoding="utf-8")


class GlobalConfig(BaseConfig):
    UNSPLASH_ACCESS_KEY: Optional[str] = None
    MONOGO_URL: Optional[str] = "mongo"
    MONGO_USERNAME: Optional[str] = "root"
    MONGO_PASSWORD: Optional[str] = ""
    MONGO_PORT: Optional[int] = 27017


config = GlobalConfig()
