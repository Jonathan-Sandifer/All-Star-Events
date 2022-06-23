from unittest import TestCase


class FeatureTests(TestCase):
    def test_black_installed(self):
        try:
            import black  # noqa: F401
        except ModuleNotFoundError:
            self.fail("Could not find 'black' installed in the environment")
