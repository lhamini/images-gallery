from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class BaseConfig(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env.local", env_file_encoding="utf-8")


class GlobalConfig(BaseConfig):
    UNSPLASH_ACCESS_KEY: Optional[str] = None


config = GlobalConfig()
